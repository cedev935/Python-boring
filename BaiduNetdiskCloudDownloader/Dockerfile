FROM golang:alpine

MAINTAINER neteroster "neteroster@gmail.com"

ADD main.go /root/gobuild/

RUN go build /root/gobuild/

RUN mv /root/gobuild/gobuild /root/netdiskdownloader

EXPOSE 2333

VOLUME ["/root/download"]

ENTRYPOINT /root/netdiskdownloader

