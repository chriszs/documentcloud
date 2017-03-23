FROM ubuntu:16.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get -qq update
RUN apt-get install -y git-core

# Create app directory
RUN mkdir -p /home/$USERNAME/documentcloud
WORKDIR /home/$USERNAME/documentcloud
RUN git clone https://github.com/documentcloud/documentcloud.git

# Install app dependencies
RUN sudo config/server/scripts/setup_common_dependencies.sh
RUN npm install -g bower
RUN gem install bundler && bundle
RUN bower install --config.interactive=false

# RUN sudo config/server/scripts/setup_webserver.sh

EXPOSE 443
CMD [ "sudo", "service", "nginx", "start" ]
