# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: 返利网

on:
  workflow_dispatch:
  schedule:
     - cron: '0 2,15 * * *'
  watch:
    types: started
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    env:
        FL_flwURL: ${{ secrets.FL_flwURL }}
        FL_flwHEADER: ${{ secrets.FL_flwHEADER }}		
        FL_flwspBODY: ${{ secrets.FL_flwspBODY }}	
        FL_flwqwBODY: ${{ secrets.FL_flwqwBODY }}        
        FL_CASH: ${{ secrets.FL_CASH }}//天天领现金提现
        FL_DHCASH: ${{ secrets.FL_DHCASH }}//签到活动兑换
    steps:
      - name: Checkout
        run: |
          git clone https://github.com/ziye12/JavaScript.git ~/JavaScript
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: npm install
        if: env.FL_flwURL
        run: |
          cd ~/JavaScript
          npm install
      - name: '运行 【返利网】'
        if: env.FL_flwURL
        run: |
          cd ~/JavaScript
          node Task/flw.js
        env:
          
          PUSH_KEY: ${{ secrets.PUSH_KEY }}
          BARK_PUSH: ${{ secrets.BARK_PUSH }}
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}
          BARK_SOUND: ${{ secrets.BARK_SOUND }}
          DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN }}
          DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET }}

    
