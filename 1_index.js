const puppeteer = require("puppeteer");
const url = "https://www.hackerrank.com/auth/login";
let page;
const email = "priyanshlashwani19@gmail.com";
const password = "8890756454";
const answer = `
#include <bits/stdc++.h>
using namespace std;

int main(){
    int number_of_elements;
    cin >> number_of_elements;
    vector <int> array(number_of_elements);
    int sum_of_array = 0;
    
    for(int i = 0; i < number_of_elements; i++){
       cin >> array[i];
       sum_of_array += array[i];
    }
    
    cout << sum_of_array;
    return 0;
}`;

(async function () {
  try {
    const browser_instance = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized"],
      defaultViewport: null,
    });
    page = await browser_instance.newPage();
    await page.goto(url);
    await page.type("#input-1", email, { delay: 10 });
    await page.type("#input-2", password, { delay: 10 });
    await page.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    );
    await waitandclick("div[data-automation='algorithms']", page);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const all_questions = await page.$$(".challenge-submit-btn");
    console.log("total_question", all_questions.length);
    let question_click = await clicking_question(
      all_questions[1],
      page,
      answer
    );
  } catch (error) {
    console.log(error);
  }
})();

/*
//   .then(function (browser_obj) {
//     const browser_open_promise = browser_obj.newPage();
//     return browser_open_promise;
//   })
//   .then(function (new_tab) {
//     page = new_tab;
//     const hackerrank_open_promise = new_tab.goto(url);
//     return hackerrank_open_promise;
//   })
//   .then(function () {
//     const email_is_entered = page.type("#input-1", email, { delay: 10 });
//     return email_is_entered;
//   })
//   .then(function () {
//     const password_is_entered = page.type("#input-2", password, { delay: 10 });
//     return password_is_entered;
//   })
//   .then(function () {
//     const press_login = page.click(
//       ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
//     );
//     return press_login;
//   })
//   .then(function () {
//     const press_algo = waitandclick("div[data-automation='algorithms']", page);
//     return press_algo;
//   })
//   .then(function () {
//     // Add a 3-second delay
//     return new Promise((resolve) => setTimeout(resolve, 3000));
//   })
//   .then(function () {
//     const all_questions = page.$$(".challenge-submit-btn");
//     return all_questions;
//   })
//   .then(function (all_questions) {
//     console.log("total_question", all_questions.length);
//     let question_click = clicking_question(all_questions[1], page, answer);
//     return question_click;
//   })
//   .catch(function (err) {
//     console.log("error", err);
//   });

async function waitandclick(selector, cpage) {
  // return new Promise(function (resolve, reject) {
  //   let waitformodalpromise = cpage.waitForSelector(selector);
  //   waitformodalpromise
  //     .then(function () {
  //       let clickmodal = cpage.click(selector);
  //       return clickmodal;
  //     })
  //     .then(function () {
  //       resolve();
  //     })
  //     .catch(function () {
  //       reject();
  //     });
  // });
  await cpage.waitForSelector(selector);
  let clickmodal =await cpage.click(selector); 
  return clickmodal;
}
// function clicking_question(question, page, answer) {
//   return new Promise(function (resolve, reject) {
//     let question_click = question.click();
//     question_click
//       .then(function () {
//         return new Promise((resolve) => setTimeout(resolve, 2000));
//       })
//       .then(function () {
//         let test_again_custom_input = waitandclick(".checkbox-input", page);
//         return test_again_custom_input;
//       })
//       .then(function () {
//         let inputField = page.type("#input-1", answer, { delay: 10 });
//         return inputField;
//       })
//       .then(function () {
//         const press_ctrl = page.keyboard.down("Control");
//         return press_ctrl;
//       })
//       .then(function () {
//         const press_a = page.keyboard.press("a");
//         return press_a;
//       })
//       .then(function () {
//         const release_ctrl = page.keyboard.up("Control");
//         return release_ctrl;
//       })
//       .then(function () {
//         const press_ctrl = page.keyboard.down("Control");
//         return press_ctrl;
//       })
//       .then(function () {
//         const press_c = page.keyboard.press("c");
//         return press_c;
//       })
//       .then(function () {
//         const release_ctrl = page.keyboard.up("Control");
//         return release_ctrl;
//       })
//       .then(function () {
//         const now_clicking_on_editor = page.click(
//           ".monaco-scrollable-element.editor-scrollable.vs"
//         );
//         return now_clicking_on_editor;
//       })
//       .then(function () {
//         const press_ctrl = page.keyboard.down("Control");
//         return press_ctrl;
//       })
//       .then(function () {
//         const press_a = page.keyboard.press("a");
//         return press_a;
//       })
//       .then(function () {
//         const release_ctrl = page.keyboard.up("Control");
//         return release_ctrl;
//       })
//       .then(function () {
//         const press_ctrl = page.keyboard.down("Control");
//         return press_ctrl;
//       })
//       .then(function () {
//         const press_v = page.keyboard.press("v");
//         return press_v;
//       })
//       .then(function () {
//         const release_ctrl = page.keyboard.up("Control");
//         return release_ctrl;
//       })
//       .then(function () {
//         const submit_finally = page.click(
//           ".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled"
//         );
//       });
//   });
// }
*/
async function waitandclick(selector, cpage) {
  await question.click();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await waitandclick(".checkbox-input", page);
  await page.type("#input-1", answer, { delay: 10 });
  await page.keyboard.down("Control");
  await page.keyboard.press("a");
  await page.keyboard.up("Control");
  await page.keyboard.down("Control");
  await page.keyboard.press("c");
  await page.keyboard.up("Control");
  await page.click(".monaco-scrollable-element.editor-scrollable.vs");
  await page.keyboard.down("Control");
  await page.keyboard.press("a");
  await page.keyboard.up("Control");
  await page.keyboard.down("Control");
  await page.keyboard.press("v");
  await page.keyboard.up("Control");
  await page.click(
    ".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled"
  );
}
