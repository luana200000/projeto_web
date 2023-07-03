/*
Curso: Engenharia de Software - UniEVANGÉLICA
Disciplina: Programaçao Web 
Dev: Luana Teixeira de Moraes - 2110867
Data: 02/07/2023
*/

// Rota de login
const handleLogin = (req, res) => {
    const { username, password } = req.body;
  
    // Realize a busca no modelo de usuários
    const authenticated = searchUserCredentials(username, password);
  
    res.send(authenticated);
  };
  
  // Registrar a rota de login
  app.post('/login', handleLogin);
  