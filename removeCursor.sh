#!/bin/bash

# 清除Cursor软件的可执行文件
echo "Removing Cursor application..."
rm -rf /Applications/Cursor.app

# 清除Cursor软件的配置文件
echo "Removing Cursor configuration files..."
rm -rf ~/Library/Application\ Support/Cursor

# 清除Cursor软件的缓存文件
echo "Removing Cursor cache files..."
rm -rf ~/Library/Caches/Cursor

# 清除Cursor软件的日志文件
echo "Removing Cursor log files..."
rm -rf ~/Library/Logs/Cursor

echo "Cursor has been completely removed."
