#!/usr/bin/env bash
# wait-for-it.sh

set -e

host="$1"
port="$2"
shift
shift
cmd="$@"

until nc -z "$host" "$port"; do
    echo "nc exited with status $?"
    echo "MySQL is unavailable - sleeping"
    echo "Attempting to ping $host"
    ping -c 1 "$host"
    sleep 5
done

>&2 echo "MySQL is up - executing command"
exec $cmd