#!/usr/bin/env sh
# -*- coding: utf-8 -*-

set -e

# =============================================================================
# Helpers
# =============================================================================

# Colors for pretty output
# RED='\033[0;31m'
# GREEN='\033[0;32m'
# YELLOW='\033[0;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# =============================================================================
# Environment variables
# =============================================================================

echo "${CYAN}Setting up environment variables...${NC}"

if [ -n "$ENV_FILE" ]; then
    echo "${CYAN}Loading environment variables from $ENV_FILE${NC}..."

    set -a
    . $ENV_FILE
    set +a

    echo "${CYAN}Environment variables loaded${NC}"
fi

# =============================================================================
# Node environment
# =============================================================================

echo "${CYAN}Determining environment...${NC}"

if [ "$NODE_ENV" = "production" ]; then
    echo "${CYAN}Running in production mode${NC}"

    #
    # Production mode actions here
    #
elif [ "$NODE_ENV" = "staging" ]; then
    echo "${CYAN}Running in staging mode${NC}"

    #
    # Staging mode actions here
    #
else
    echo "${CYAN}Running in development mode${NC}"

    #
    # Development mode actions here
    #
fi

# =============================================================================
# Starting application
# =============================================================================

echo "${CYAN}Starting application: $*${NC}"

exec "$@"
