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
    it('Login User Test -- SUCESS', () => userSucess.loginTestUser());
    it('Login User Admin -- SUCESS', () => userSucess.loginAdminUser());
  });

  describe('Testes de Login Falha', () => {
    const failTests = [
      { name: 'Email T + Password F  -- SUCESS', fn: () => userFail.emailTPasswordF() },
      { name: 'Email F + Password T  -- SUCESS', fn: () => userFail.emailFPasswordT() },
      { name: 'Email F + Password F  -- SUCESS', fn: () => userFail.emailFPasswordF() },
      { name: 'White Fields  -- SUCESS', fn: () => userFail.whiteFilds() },
      { name: 'Only Email  -- SUCESS', fn: () => userFail.onlyEmail() },
      { name: 'Only Password  -- SUCESS', fn: () => userFail.onlyPassword() },
      { name: 'Email Invalid Format  -- SUCESS', fn: () => userFail.emailInvalidFormat() },
      { name: 'Password Invalid Format  -- SUCESS', fn: () => userFail.passwordInvalidFormat() },
      { name: 'Email Invalid Caracter  -- SUCESS', fn: () => userFail.emailIvalidCaracters() },
      { name: 'Password Invalid Caracter  -- SUCESS', fn: () => userFail.passwordIvalidCaracters() },
      { name: 'Email Space Before -- NEGATIVE', fn: () => userFail.emailBeforeSpace() },
      { name: 'Email Space After -- NEGATIVE', fn: () => userFail.emailAfterSpace() },
      { name: 'Password Space Before  -- SUCESS', fn: () => userFail.passwordBeforeSpace() },
      { name: 'Password Space After  -- SUCESS', fn: () => userFail.passwordAfterSpace() },
      { name: 'Email Space Middle -- SUCESS', fn: () => userFail.emailMiddleSpace() },
      { name: 'Password Space Middle  -- SUCESS', fn: () => userFail.passwordMiddleSpace() },
    ];

    failTests.forEach((test) => {
      it(`Login ${test.name}`, test.fn);
    });
  });

  describe("Testes de Segurança e UX - you shouldn't be able to log i", () => {
    it('Test route Edit hero -- NEGATIVE', () => securityPage.routeEdit());
    it('Test route New hero -- NEGATIVE', () => securityPage.routeNew());
    it('Test Mensagem error Clean  -- SUCESS', () => casesUXPage.clearMensageError());
    it('Test Caracters Occult  -- SUCESS', () => casesUXPage.caractersOccult());
  });

  describe('Tests User test', () => {

    it('Test Like Hero  -- SUCESS', () => userTest.checkLikeHero())
    it('Test Save Hero  -- SUCESS', () => userTest.checkSaveHero())
    it('Test New Route UserTest -- NEGATIVE', () => userTest.checkNewRoute())
    it('Test new hero creat userTest  -- SUCESS', () => userTest.createNewHeroTest())
    it('Test Edit Route UserTest -- NEGATIVE', () => userTest.checkEditRoute())
    it('Test Msg Error Edit hero  -- SUCESS', () => userTest.msgErrorEditHero())
    it('Test Logout Button -- SUCESS', () => userTest.checkLogoutButton())
    it('Test Function Logout -- SUCESS', () => userTest.checkLogoutFunction())

  })

  describe('Tests User Admin', () => {

    it('Test Check Admin Login -- SUCESS', () => userAdmin.functionAdmin())
    it('Test Logout Button Admin -- SUCESS', () => userAdmin.checkLogoutButtonAdmin())
    it('Test Function Logout Admin -- SUCESS', () => userAdmin.checkLogoutFunctionAdmin())
    it('Test Check Edit Hero Admin -- SUCESS', () => userAdmin.checkEditHero())
    it('Test 2 Power hero -- NEGATIVE', () => userAdmin.checkHero2Power())
    it('Test Create New Hero -- SUCESS', () => userAdmin.creatNewHero())
    it('Test Delet Test hero -- SUCESS', () => userAdmin.deletTestHero())
    it('Test Delet hero Edit page -- SUCESS', () => userAdmin.deletHeroEditPage())
    it('Test Create hero equal name -- NEGATIVE', () => userAdmin.creatHeroEqualName())
    it('Test Create hero and Check Values -- SUCESS', () => userAdmin.checkValuesHero())
    it('Test Edit image hero -- SUCESS', () => userAdmin.editImageHero())
    it('Test Create Hero White filds admin -- SUCESS', () => userAdmin.createHeroWhiteFilds())
    it('Test Create Hero no name admin -- SUCESS', () => userAdmin.createHeroNoName())
    it('Test Create Hero no price admin -- SUCESS', () => userAdmin.createHeroNoPrice())
    it('Test Create Hero no fans admin -- SUCESS', () => userAdmin.createHeroNoFans())
    it('Test Create Hero no saves admin -- SUCESS', () => userAdmin.createHeroNoSaves())
    it('Test Create Hero no Powers admin -- SUCESS', () => userAdmin.createHeroNoPowers())
    it('Test Create hero negatives values -- NEGATIVE', () => userAdmin.createHeroNegativesValues())
  })

});
