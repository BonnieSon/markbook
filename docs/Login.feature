Feature: Login

   사용자는 BookMarker 서비스를 이용하기를 위하여 로그인을 하길 원한다.
   Scenario: Google Login
    Given 로그인 페이지에서
    When Google 로그인 버튼을 누르고 Google 로그인에 성공하면
    Then 메인페이지로 넘어간다.