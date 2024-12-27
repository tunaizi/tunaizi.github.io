#!/bin/bash

echo "Please enter the name of the remote branch you want to pull (empty means no pull) :"
read remote_branch

echo "Please enter the Commit information:"
read commit_message

#!/bin/bash

# 检查是否提供了 remote_branch 参数
if [ -n "$1" ]; then
  remote_branch="$1"
  echo "Pulling from remote branch: $remote_branch"
  git pull origin "$remote_branch"
else
  echo "No remote branch provided, executing other logic..."
  # 在这里添加其他逻辑
  # 例如：
  git fetch origin
  git checkout main
  git pull origin main
  echo "Default logic executed."
fi

if [ -n "$remote_branch" ]; then
  echo "Pulling for remote branch name is $remote_branch 。。。。"
  git pull origin $remote_branch
else
  echo "No pull branch detected The pull operation is not performed"
fi

if [ -n "$commit_message" ]; then
  echo "This submission information is '$commit_message' stating commit。。。。"

  git add .

  git commit -m "$commit_message"

  git push origin $remote_branch

  echo "Git commit done。"
else
  echo "Terminated without submitting information ！"
fi
