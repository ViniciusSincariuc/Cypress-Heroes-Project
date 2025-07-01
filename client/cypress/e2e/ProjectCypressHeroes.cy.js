import UserSucessPage from "../pages/userSucess.js";
import UserFailPage from "../pages/usersFail.js";
import SecurityPage from "../pages/security.js";
import CasesUXPage from "../pages/casesUX.js";

const userFail = new UserFailPage();
const userSucess = new UserSucessPage();
const securityPage = new SecurityPage();
const casesUXPage = new CasesUXPage();

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

});
