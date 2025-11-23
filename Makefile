.DEFAULT_GOAL := help

help:
	@echo "Available targets:"
	@echo "  install - Install frontend dependencies"
	@echo "  dev     - Start the development server"
	@echo "  build   - Build the frontend for production"
	@echo "  clean   - Remove build artifacts"

install:
	cd frontend && npm install

dev:
	cd frontend && npm run dev

build:
	cd frontend && npm run build

clean:
	rm -rf frontend/dist

.PHONY: help install dev build clean