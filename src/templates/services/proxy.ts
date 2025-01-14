export const proxy = `import type { ServiceConfig } from '@casthub/devon';

export const config: ServiceConfig = {
    compose: {
        image: 'nginx:latest',
        ports: ['80:80', '443:443'],
        volumes: [
            './{{dir}}/proxy/sites:/etc/nginx/conf.d',
            './{{dir}}/proxy/certs:/etc/ssl',
        ],
        restart: 'always',
    },
};
`;

export const proxyExample = `server {
    listen 443 ssl;
    server_name app.local.example.com;

    ssl_certificate /etc/ssl/local.example.com.pem;
    ssl_certificate_key /etc/ssl/local.example.com-key.pem;

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $host;
        proxy_pass http://app:3000;
        proxy_redirect off;
        proxy_http_version 1.1;
	    proxy_set_header Upgrade $http_upgrade;
	    proxy_set_header Connection "Upgrade";
    }
}

server {
    listen 80;
    server_name app.local.example.com;

    return 301 https://$host$request_uri;
}
`;
