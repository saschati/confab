# Makefile

# make commands be run with `bash` instead of the default `sh`
SHELL='/bin/bash'

# Setup —————————————————————————————————————————————————————————————————————————
.DEFAULT_GOAL := n

# .DEFAULT: If command does not exist in this makefile
# default:  If no command was specified:
.DEFAULT default:
	if [ "$@" != "" ]; then echo "Command '$@' not found."; fi;
	make help

## —— 🦂  Project Make file  🦂  —————————————————————————————————————————————————————

help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Init project ———————————————————————————————————————————————————————————————————
init: docker-down clear docker-pull docker-build npm-install docker-up ready ## Project init

## —— Manage project —————————————————————————————————————————————————————————————————
up: docker-down docker-up ## Project up
down: docker-down ## Project down
restart: down up  ## Project restart


docker-pull:
	docker-compose pull

docker-build:
	docker-compose build

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

ready:
	docker run --rm -v ${PWD}/app:/app --workdir=/app alpine touch .ready

clear:
	docker run --rm -v ${PWD}/app:/app --workdir=/app alpine rm -f .ready


## —— App —————————————————————————————————————————————————————————————————————————————
n: ## Run node in dir app with params cmd. example 'cmd="npm i"'
	docker-compose run --rm node $(cmd)

npm-install: ## Install node_modules according to the current package-lock.json file
	docker-compose run --rm node npm install