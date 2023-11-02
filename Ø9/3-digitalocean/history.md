```
root@joe-express-sms:~/sms# history
    1  sudo apt-get update
    2  sudo apt-get install -y ca-certificates curl gnupg
    3  sudo mkdir -p /etc/apt/keyrings
    4  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt keyrings/nodesource.gpg
    5  NODE_MAJOR=16
    6  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
    7  sudo apt-get update
    8  sudo apt-get install nodejs -y
    9  sudo apt update
   10  sudo apt install nginx
   11  sudo nginx -v
   12  systemctl status nginx
   13  sudo ufw app list
   14  sudo ufw allow 'Nginx HTTP'
   15  sudo ufw allow OpenSSH
   16  sudo ufw enable
   17  sudo ufw status
   18  sudo nano /etc/nginx/sites-available/default
   19  sudo nginx -t
   20  sudo systemctl restart nginx
   21  ls
   22  mkdir sms
   23  cd sms
   24  npm install -g pm2
   25  npm init -y
   26  touch index.js
   27  sudo nano index.js
   28  npm install twilio express
   29  pm2 start index.js 
   30  pm2 save
   31  pm2 list
   32  pm2 log
root@joe-express-sms:~/sms
```