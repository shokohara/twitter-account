// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Main} from './main.js'
const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const result = Main.main("hoge")
  
  // const browser = process.env.VERCEL ?
  //   await puppeteer.launch({
  //     args: chrome.args,
  //     executablePath: await chrome.executablePath,
  //     headless: chrome.headless,
  //   }) : await puppeteer.launch({
  //     channel: 'chrome',
  //   })
  // const page = await browser.newPage();
  // // const id = "shokohara"
  // const id = "holfdjslkfajsfoisajs"
  // const txt = "This account doesn’t exist"
  // await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36")
  // await page.goto(`https://twitter.com/${id}`);
  // await page.waitForFunction(`document.querySelector("body").innerText.includes("${txt}") || document.querySelector("body").innerText.includes("Joined")`);
  // const bodyHandle = await page.$('body');
  // const html = await page.evaluate(body => body.innerHTML, bodyHandle);
  // await page.screenshot({ path: 'page.png', fullPage: true });
  // await browser.close();
  res.status(200).json({ name: result })
}
