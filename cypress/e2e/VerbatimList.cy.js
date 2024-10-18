const SurveyURL = 'https://dev.fb180.xyz/Login';
const UserName = 'adminx@uat.feedback180.com';
const Password = 'isqtqb560!';

const viewportWidth = 1024;
const viewportHeight = 768;

/* function to check text */
const checkText = (textArray) => {
  textArray.forEach(text => {
    cy.contains(text).should('exist'); // ตรวจสอบว่าข้อความนั้นมีอยู่ในหน้าเว็บ
  });
};

const clickRating = (v) => {
  v.forEach(([className, dataValue, containText]) => {
    // สร้าง selector ที่รวม className และ dataValue
    const selector = `${className}[${dataValue}]`;

    // Log selector ที่จะใช้
    cy.log(`Looking for ${selector} with text ${containText}`);

    // ใช้ selector ที่สร้างขึ้น
    cy.get(selector, {
        timeout: 10000
      })
      .should('exist') // ตรวจสอบว่ามีองค์ประกอบอยู่
      .and('contain', containText) // ตรวจสอบว่ามีข้อความที่ต้องการ
      .click(); // คลิกปุ่ม
  });
};

const Search_clickRating = (parent, object) => {
  object.forEach(([className, dataValue, containText]) => {
    // สร้าง selector ที่รวม parent, className และ dataValue
    const selector = `${parent} ${className}[${dataValue}]`;

    // Log selector ที่จะใช้
    cy.log(`Looking for ${selector} with text ${containText}`);

    // ใช้ selector ที่สร้างขึ้น
    cy.get(selector, {
        timeout: 10000
      })
      .click(); // คลิกปุ่ม
  });
};

const checkBox = (Object) => {
  Object.forEach(choice => {
    cy.get(`input#${choice}`).check({
      force: true
    });
  });
};

const clickNext_bt = (Object) => {
  cy.get(Object).click();
};

const ActionBlock5 = () => {
  ActionBlock4();
  Search_clickRating(`div#B9F75819-F49A-4815-98CD-A136AD79BF65`, ratingNumberBlock401D);
  //cy.wait(2);
  Search_clickRating(`div#511C7E6C-92ED-451E-89D1-66CE49969F27`, ratingNumberBlock401D);

  clickNext_bt('button.survey_button.button_next.2');
};

const ActionBlock6 = () => {
  ActionBlock5();

  cy.get('#textareaBF6F0696-8379-42EF-87FC-BD094734DA14')
    .type(DetailTextarea)
    .should('have.value', DetailTextarea);

  cy.get('div#BF6F0696-8379-42EF-87FC-BD094734DA14').click();
  cy.get('button.survey_button.button_next.2')
    .invoke('removeAttr', 'disabled') // Remove the 'disabled' attribute
    .click(); // Click the button if needed

  clickNext_bt('button.survey_button.button_next.2');
};

const ActionBlock7 = () => {
  ActionBlock6();

  clickNext_bt('button.survey_button.button_next.2');
};

const ActionBlock8 = () => {
  ActionBlock7();
  checkText(CheckBoxBlock8);
};

const startDate = '03/07/2022';
const endDate = '12/07/2024';
const Step1 = () => {
  cy.wait(3000);
  cy.get('input[placeholder="Start date"]').first().type(startDate);
  cy.get('input[placeholder="End date"]').first().type(endDate);
  cy.contains('button', 'Apply').click();
};

// const SearchText1 = [
//   "149208991_001", "149208991_002", "149208991_003", "149208991_004",
//   "149208991_005", "149208991_006", "149208991_007", "149208991_008",
//   "149208991_009", "149208991_010"
// ];

const data = [
  {
    "PARENT_CASENUMBER": "149208991_001",
    "PARENT_TYPE__C": "OT - ร้องเรียนการขายของพนักงาน RM : ให้ข้อมูลไม่ถูกต้อง/ไม่ครบถ้วน  - Testing",
    "PARENT_PROCESS_ADD_INFO_1__C": "RM SSME",
    "PARENT_PROCESS_ADD_INFO_2__C": "เรื่องการหลอกลวงให้ทำสินเชื่อ Testing - 001",
    "PARENT_PROCESS_ADD_INFO_3__C": "s77387 ATM Testing - AB1"
  },
  {
    "PARENT_CASENUMBER": "149208991_002",
    "PARENT_TYPE__C": "CC - ร้องเรียนการขายของพนักงาน Direct Sales : ให้ข้อมูลไม่ถูกต้อง/ไม่ครบถ้วน  - Testing",
    "PARENT_PROCESS_ADD_INFO_1__C": "Testing - 01 พนักงานไม่แจ้งแจ้งข้อมูล/เงื่อนไขโปรโมชั่น New Card SCB M : สมัครบัตรเครดิต SCB M รับปังกระเป๋าล้อลาก Red Deluxe by Caggioni (1 ตุลาคม 2565 - 31 มีนาคม 2566) ทำให้ลูกค้าไม่ได้รับของรางวัล",
    "PARENT_PROCESS_ADD_INFO_2__C": "ณัชชา ทิพย์จักษุ Testing - 002",
    "PARENT_PROCESS_ADD_INFO_3__C": "SCB M LIVE - AB2"
  },
  {
    "PARENT_CASENUMBER": "149208991_003",
    "PARENT_TYPE__C": "BK - บัตร Planet : ร้องเรียนผลิตภัณฑ์  - Testing",
    "PARENT_PROCESS_ADD_INFO_1__C": "ไม่พอใจค่าธรรมเนียมถอนเงินสด Testing - 02",
    "PARENT_PROCESS_ADD_INFO_2__C": "ลูกค้าไม่พอใจการค่าธรรมเนียมในการถอนเงินที่เครื่อง ATM Testing - 003",
    "PARENT_PROCESS_ADD_INFO_3__C": "886912804124 - AB3"
  },
  {
    "PARENT_CASENUMBER": "149208991_004",
    "PARENT_TYPE__C": "OT - ร้องเรียนการให้บริการของพนักงานสาขา  - Testing",
    "PARENT_PROCESS_ADD_INFO_1__C": "ปฏิบัติงานไม่ถูกต้อง/ไม่ครบถ้วน Testing - 03",
    "PARENT_PROCESS_ADD_INFO_2__C": "หลอกให้ซื้อประกัน FWD แล้วแจ้งลค.ว่าจะได้รับบัตร First ATM Testing - 005",
    "PARENT_PROCESS_ADD_INFO_3__C": "นางสาว ลลิษา"
  },
  {
    "PARENT_CASENUMBER": "149208991_005",
    "PARENT_TYPE__C": "BK - แจ้งปัญหาค่าธรรมเนียมตู้ ATM/CDM ไม่ถูกต้อง  - Testing",
    "PARENT_PROCESS_ADD_INFO_1__C": "ถอนเงิน Testing ",
    "PARENT_PROCESS_ADD_INFO_2__C": "ไทยพาณิชย์ - SCB Test",
    "PARENT_PROCESS_ADD_INFO_3__C": "ลค.ทำการเปลี่ยนแปลงสาขาเจ้าของบัญชีแแล้วแต่พอทำรายการกดเงิน มีค่าธรรมเนียมการใช้งาน - AB4"
  },
  {
    "PARENT_CASENUMBER": "149208991_006",
    "PARENT_TYPE__C": "BK - แจ้งปัญหาค่าธรรมเนียมตู้ ATM/CDM ไม่ถูกต้อง  - Testing",
    "PARENT_PROCESS_ADD_INFO_1__C": "ถอนเงิน Testing ",
    "PARENT_PROCESS_ADD_INFO_2__C": "ไทยพาณิชย์ - SCB Test",
    "PARENT_PROCESS_ADD_INFO_3__C": "Testing - AB4 ลค.ขอตรวจสอบค่าธรรมเนียมถอนเงิน ลค.ถอนเงินแถวนนทบุรี ปทุมธานี ไม่เคยมีค่าธรรมเนียม 15 บ แต่ล่าสุด ว.21/07/66 ที่ตู้ scbS1GCR68OB: 7-11 ศุภาลัยพาร์ควิล วงแหวน-ราชพฤกษ์ มีค่าธรรมเนียม 15บ.และ ว.22/07/66 ตู้ scbS1Hสาขาเทสโก้ โลตัส ลำลูกกา (คลอง 2) เครื่อง 1"
  },
  {
    "PARENT_CASENUMBER": "149208991_007",
    "PARENT_TYPE__C": "AF - ร้องเรียนการให้บริการของพนักงาน Direct Sales  - Testing",
    "PARENT_PROCESS_ADD_INFO_1__C": "ปฏิบัติงานไม่ถูกต้อง/ไม่ครบถ้วน Testing - 04",
    "PARENT_PROCESS_ADD_INFO_2__C": "ตามโน๊ต ATM Testing - 004",
    "PARENT_PROCESS_ADD_INFO_3__C": "พัชราภา"
  },
  {
    "PARENT_CASENUMBER": "149208991_008",
    "PARENT_TYPE__C": "BK - แจ้งปัญหาค่าธรรมเนียมตู้ ATM/CDM ไม่ถูกต้อง  - Testing",
    "PARENT_PROCESS_ADD_INFO_1__C": "ถอนเงินไม่ได้",
    "PARENT_PROCESS_ADD_INFO_2__C": "ไทยพาณิชย์ - SCB Test",
    "PARENT_PROCESS_ADD_INFO_3__C": "ลูกค้าถอนเงิน เขตจังหวัดเดียวกัน แต่มีการเรียกเก็บค่าธรรมเนียม ถอน 2รายการ วันที่ 23/07/66และ 31/07/66 - AB5"
  },
  {
    "PARENT_CASENUMBER": "149208991_009",
    "PARENT_TYPE__C": "การเสนอขายประกันชีวิต  - Testing",
    "PARENT_PROCESS_ADD_INFO_1__C": "",
    "PARENT_PROCESS_ADD_INFO_2__C": "",
    "PARENT_PROCESS_ADD_INFO_3__C": ""
  },
  {
    "PARENT_CASENUMBER": "149208991_010",
    "PARENT_TYPE__C": "การเสนอขายประกันชีวิต  - Testing",
    "PARENT_PROCESS_ADD_INFO_1__C": "",
    "PARENT_PROCESS_ADD_INFO_2__C": "",
    "PARENT_PROCESS_ADD_INFO_3__C": ""
  }
 ];

const SearchText2 = 'MMM';

const SearchCaseID = (CASENUMBER, terms) => {
  terms.forEach((term, index) => {
    cy.get('input[placeholder="Search Case ID"]').first().type(term);
    cy.wait(6000); // Wait for results to load
    cy.log(`Screenshot ${CASENUMBER[index]} - ${term}`);
    cy.screenshot(`SCB_Cap/SearchCaseID/${CASENUMBER[index]}/${term.replace(/\s/g, '_')}`); // Save screenshot with dynamic name
    cy.get('input[placeholder="Search Case ID"]').first().clear(); // Clear the input
  });
};


const SearchWord = (selector, CASENUMBER, terms) => {
  cy.wait(3000);
  terms.forEach((term, index) => {
    // Check if term is defined and not empty
    if (term) {
      cy.get(`input[placeholder="Search keyword by Verbatim"]`).type(term);
      // Wait for results to load
      cy.wait(6000);
      cy.log('Screenshot ${CASENUMBER} - ${term}');
      cy.screenshot(`SCB_Cap/SearchWord/${CASENUMBER[index]}/${term.replace(/\s/g, '_')}`); // Save screenshot with dynamic name
      cy.get(selector).first().clear(); // Clear the input
    } else {
      cy.log(JSON.stringify(terms));
    }
  });
}


const SearchVervatim = (text) => {
  cy.get('input[placeholder="Search keyword by Verbatim"]').type(text);
};

const clickbt = (Object) => {
  cy.get(Object).click();
}

describe('Login and navigate to SCB Hottopic', () => {
  beforeEach(() => {
    cy.visit(SurveyURL);

    cy.get('input[autocomplete="off"]').first().type(UserName); // For username
    cy.get('input[type="password"]').type(Password); // For password

    cy.get('button.btn-login').click();

    // Ensure login was successful
    //cy.url().should('include', '/Dashboard'); 
  });

  it('Should navigate to SCB Hottopic page', () => {
    Step1();
    const caseID = data.map(item => item.PARENT_CASENUMBER);
    const searchTerms = data.map(item => item.PARENT_CASENUMBER); 

    const combinedTerms = data.map(item => 
      `${item.PARENT_PROCESS_ADD_INFO_1__C || ''} ${item.PARENT_PROCESS_ADD_INFO_2__C || ''} ${item.PARENT_PROCESS_ADD_INFO_3__C || ''}`.trim()
    );

    //const searchTerms =  data.map(item => item.PARENT_TYPE__C);// Use PARENT_CASENUMBER as terms


    /* Search in Search Case ID */
    //SearchCaseID(caseID, searchTerms); /* PARENT_CASENUMBER */
    //cy.log('Click Click Export Button');
    //clickbt('button.export-file');  

    /** Search PARENT.CASENUMBER to input search caseID and screenshot*/
    //SearchWord('input[placeholder="Search keyword by Verbatim"]', caseID, searchTerms); /* PARENT_CASENUMBER */
    //SearchWord('input[placeholder="Search keyword by Verbatim"]', caseID, searchTerms); /* PARENT_TYPE__C */
     
    SearchWord('input[placeholder="Search keyword by Verbatim"]', caseID, combinedTerms); /* PARENT_PROCESS_ADD_INFO_1__C */
  });
});

