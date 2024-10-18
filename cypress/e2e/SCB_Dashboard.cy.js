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

const startDate = '01/07/2022';
const endDate = '31/07/2024';
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
    "PARENT_CASENUMBER": "149208991_099",
    "PARENT_PROCESS_ADD_INFO_1__C": "RM SSME Testing Date/Time",
    "PARENT_PROCESS_ADD_INFO_2__C": "เรื่องการหลอกลวงให้ทำสินเชื่อ Testing -Testing Date/Time",
    "PARENT_PROCESS_ADD_INFO_3__C": "s77387 ATM Testing - AB1 Testing Date/Time"
  },
  {
    "PARENT_CASENUMBER": "149208991_100",
    "PARENT_PROCESS_ADD_INFO_1__C": "RM SSME Testing Date/Time",
    "PARENT_PROCESS_ADD_INFO_2__C": "เรื่องการหลอกลวงให้ทำสินเชื่อ Testing -Testing Date/Time",
    "PARENT_PROCESS_ADD_INFO_3__C": "s77387 ATM Testing - AB1 Testing Date/Time"
  },
  {
    "PARENT_CASENUMBER": "149208991_101",
    "PARENT_PROCESS_ADD_INFO_1__C": "RM SSME Testing Date/Time",
    "PARENT_PROCESS_ADD_INFO_2__C": "เรื่องการหลอกลวงให้ทำสินเชื่อ Testing -Testing Date/Time",
    "PARENT_PROCESS_ADD_INFO_3__C": "s77387 ATM Testing - AB1 Testing Date/Time"
  },
  {
    "PARENT_CASENUMBER": "149208991_102",
    "PARENT_PROCESS_ADD_INFO_1__C": "RM SSME Testing Date/Time",
    "PARENT_PROCESS_ADD_INFO_2__C": "เรื่องการหลอกลวงให้ทำสินเชื่อ Testing -Testing Date/Time",
    "PARENT_PROCESS_ADD_INFO_3__C": "s77387 ATM Testing - AB1 Testing Date/Time"
  },
  {
    "PARENT_CASENUMBER": "149208991_103",
    "PARENT_PROCESS_ADD_INFO_1__C": "RM SSME Testing Date/Time",
    "PARENT_PROCESS_ADD_INFO_2__C": "เรื่องการหลอกลวงให้ทำสินเชื่อ Testing -Testing Date/Time",
    "PARENT_PROCESS_ADD_INFO_3__C": "s77387 ATM Testing - AB1 Testing Date/Time"
  }
 ];

const clickDetail = (CASENUMBER,selector,term)=>{
   cy.contains(selector,term).click();
   cy.screenshot(`SCB_Cap/popup/${CASENUMBER}/${term}`); // Save screenshot with dynamic name
};



const SearchCaseID = (CASENUMBER, terms) => {
  terms.forEach((term, index) => {
    cy.get('input[placeholder="Search Case ID"]').first().type(term);
    cy.wait(6000); // Wait for results to load
    cy.log(`Screenshot ${CASENUMBER[index]} - ${term}`);

     
         clickDetail(CASENUMBER[index],'span.text-verbatim',term);

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
      cy.screenshot(`SCB_Cap/SearchWord/${CASENUMBER[index]}/${term}`); // Save screenshot with dynamic name


      cy.contains('span.text-verbatim', term).click();
      cy.wait(3000);
      cy.screenshot(`SCB_Cap/POPup/${CASENUMBER[index]}/${term}`); // Save screenshot with dynamic name
      cy.get('button[aria-label="close"]').first().click(); // คลิกเฉพาะปุ่มแรก
 

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

