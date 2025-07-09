import UserSucessPage from "../pages/userSucess.js";
import UserFailPage from "../pages/usersFail.js";
import SecurityPage from "../pages/security.js";
import CasesUXPage from "../pages/casesUX.js";
import UserTestPage from "../pages/userTest.js";
import UserAdminPage from "../pages/userAdmin.js";

const userFail = new UserFailPage();
const userSucess = new UserSucessPage();
const securityPage = new SecurityPage();
const casesUXPage = new CasesUXPage();
const userTest = new UserTestPage();
const userAdmin = new UserAdminPage();

describe('Cypress Heroes Tests', () => {

  describe('Testes de Login Sucesso', () => {
    it('Login User Test', () => userSucess.loginTestUser());
    it('Login User Admin', () => userSucess.loginAdminUser());
  });

  describe('Testes de Login Falha', () => {
    const failTests = [
      { name: 'Email T + Password F', fn: () => userFail.emailTPasswordF() },
      { name: 'Email F + Password T', fn: () => userFail.emailFPasswordT() },
      { name: 'Email F + Password F', fn: () => userFail.emailFPasswordF() },
      { name: 'White Fields', fn: () => userFail.whiteFilds() },
      { name: 'Only Email', fn: () => userFail.onlyEmail() },
      { name: 'Only Password', fn: () => userFail.onlyPassword() },
      { name: 'Email Invalid Format', fn: () => userFail.emailInvalidFormat() },
      { name: 'Password Invalid Format', fn: () => userFail.passwordInvalidFormat() },
      { name: 'Email Invalid Caracter', fn: () => userFail.emailIvalidCaracters() },
      { name: 'Password Invalid Caracter', fn: () => userFail.passwordIvalidCaracters() },
      { name: 'Email Space Before', fn: () => userFail.emailBeforeSpace() },
      { name: 'Email Space After', fn: () => userFail.emailAfterSpace() },
      { name: 'Password Space Before', fn: () => userFail.passwordBeforeSpace() },
      { name: 'Password Space After', fn: () => userFail.passwordAfterSpace() },
      { name: 'Email Space Middle', fn: () => userFail.emailMiddleSpace() },
      { name: 'Password Space Middle', fn: () => userFail.passwordMiddleSpace() },
    ];

    failTests.forEach((test) => {
      it(`Login ${test.name}`, test.fn);
    });
  });

  describe('Testes de Segurança e UX', () => {
    it('Test route Edit hero', () => securityPage.routeEdit());
    it('Test route New hero', () => securityPage.routeNew());
    it('Test Mensagem error Clean', () => casesUXPage.clearMensageError());
    it('Test Caracters Occult', () => casesUXPage.caractersOccult());
  });

  describe('Tests User test', () => {

    it('Test Like Hero', () => userTest.checkLikeHero())
    it('Test Save Hero', () => userTest.checkSaveHero())
    it('Test New Route UserTest', () => userTest.checkNewRoute())
    it('Test new hero creat userTest', () => userTest.createNewHeroTest())
    it('Test Edit Route UserTest', () => userTest.checkEditRoute())
    it('Test Msg Error Edit hero', () => userTest.msgErrorEditHero())
    it('Test Logout Button', () => userTest.checkLogoutButton())
    it('Test Function Logout', () => userTest.checkLogoutFunction())

  })

  describe('Tests User Admin', () => {

    it('Test Check Admin Login', () => userAdmin.functionAdmin())
    it('Test Logout Button Admin', () => userAdmin.checkLogoutButtonAdmin())
    it('Test Function Logout Admin', () => userAdmin.checkLogoutFunctionAdmin())
    it('Test Check Edit Hero Admin', () => userAdmin.checkEditHero())
    it('Test 2 Power hero', () => userAdmin.checkHero2Power())
    it('Test Create New Hero', () => userAdmin.creatNewHero())
    it('Test Delet Test hero', () => userAdmin.deletTestHero())
    it('Test Delet hero Edit page', () => userAdmin.deletHeroEditPage())
    it('Test Create hero equal name', () => userAdmin.creatHeroEqualName())
    it('Test Create hero and Check Values', () => userAdmin.checkValuesHero())
    it('Test Edit image hero', () => userAdmin.editImageHero())
  })

});
