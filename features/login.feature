Feature: Inicio de Sesión

  Scenario: Login Exitoso con usuario estándar
    Given Que el usuario está en la pantalla de inicio de sesión
    When Ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    And Presiona el botón de login
    Then Debería ver la pantalla de productos