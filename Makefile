.DEFAULT_GOAL := help

help:
	@echo "Available targets:"
	@echo "  install - Install frontend dependencies"
	@echo "  dev     - Start the development server"
	@echo "  build   - Build the frontend for production"
	@echo "  clean   - Remove build artifacts"
	@echo "  storybook - Start Storybook"

install:
	cd frontend && npm install

dev:
	cd frontend && npm run dev

build:
	cd frontend && npm run build

storybook:
	cd frontend && npm run storybook

clean:
	rm -rf frontend/dist

.PHONY: help install dev build clean storybook