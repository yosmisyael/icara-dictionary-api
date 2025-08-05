#!/bin/bash

ORIGINAL_FILE="./seed"
TS_FILE="./seed.ts"

echo "Renaming file: $ORIGINAL_FILE -> $TS_FILE"
mv "$ORIGINAL_FILE" "$TS_FILE"
if [ $? -ne 0 ]; then
    echo "Error: Failed to rename file. Exiting."
    exit 1
fi

echo "Running seed script..."
npx ts-node "$TS_FILE"
EXIT_CODE=$?

echo "Renaming file back: $TS_FILE -> $ORIGINAL_FILE"
mv "$TS_FILE" "$ORIGINAL_FILE"
if [ $? -ne 0 ]; then
    echo "Error: Failed to rename file back. Please rename manually."
    exit 1
fi

if [ $EXIT_CODE -ne 0 ]; then
    echo "Error: Seeding script failed with exit code $EXIT_CODE."
    exit $EXIT_CODE
else
    echo "Success: Seeding completed successfully."
fi