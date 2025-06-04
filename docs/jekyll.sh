#!/usr/bin/env bash

# using the official Jekyll image, see https://github.com/envygeeks/jekyll-docker
# runs on port 4000


mkdir -p ".bundles_cache"
docker run --rm \
  -v "$PWD:/srv/jekyll" \
  -e BUNDLE_PATH="/srv/jekyll/.bundles_cache" \
  -p 4000:4000 \
  jekyll/builder:3.8 \
  bash -c "gem install bundler -v 2.4.22 && bundle install && bundle exec Jekyll serve --host 0.0.0.0 --verbose --config _config.yml,_config_dev.yml"