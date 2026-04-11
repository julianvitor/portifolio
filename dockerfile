FROM python:3.12-alpine AS builder

WORKDIR /app

COPY ./minify.py ./minify.py
COPY ./portifolio_STATIC ./portifolio_STATIC

RUN pip install --no-cache-dir htmlmin
RUN python ./minify.py --src ./portifolio_STATIC --dst ./dist


FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html