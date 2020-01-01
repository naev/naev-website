
.PHONY: all view install check

all:
	bundle exec nanoc

view:
	bundle exec nanoc view

install: all
	 rsync -r --progress output/. some_server:some_path

check:
	bundle exec nanoc check --all



