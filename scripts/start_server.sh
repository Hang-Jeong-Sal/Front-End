cd ~/nextapp
sudo yarn
sudo yarn install
sudo pm2 reload all
sudo pm2 start yarn -- start