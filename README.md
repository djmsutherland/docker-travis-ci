# Docker / Travis CI

> Contained continuous integration

[![Build Status](https://travis-ci.com/djmsutherland/docker-travis-ci.svg?branch=master)](https://travis-ci.com/djmsutherland/docker-travis-ci)

## Commands

Start:

```
docker-compose up --build
```

Test:

```
docker-compose -p test run -p 3000 --rm app yarn test
```

Add dependency:

```
docker-compose exec app yarn add `dependency`
```
