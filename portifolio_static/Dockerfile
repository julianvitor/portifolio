FROM python:3.12-alpine AS builder

WORKDIR /app

COPY . ./site

RUN pip install --no-cache-dir htmlmin2
RUN python ./site/minify.py --src ./site --dst ./dist


FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html