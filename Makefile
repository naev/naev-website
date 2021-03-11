
.PHONY: all view install check

all:
	bundle exec nanoc

view: all
	bundle exec nanoc view

install: all
	test -d naev.github.io || git clone git@github.com:naev/naev.github.io.git
	rsync -avzh --delete --exclude=".*" --exclude="CNAME" output/ naev.github.io
	(cd naev.github.io && git add . && git commit -a -m "updates" && git push)

check: all
	bundle exec nanoc check



