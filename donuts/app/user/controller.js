/*
Curso: Engenharia de Software - UniEVANGÉLICA
Disciplina: Programaçao Web 
Dev: Luana Teixeira de Moraes - 2110867
Data: 02/07/2023
*/




// Função para buscar as credenciais do usuário
const searchUserCredentials = (username, password) => {
    // Implemente a busca no modelo de usuários com as credenciais fornecidas
    // Retorne true se as credenciais forem encontradas, caso contrário, retorne false
    // Exemplo fictício:
    const users = [
      new User('admin', 'password'),
      new User('john', '123456'),
      new User('jane', 'qwerty')
    ];
  
    for (const user of users) {
      if (user.username === username && user.password === password) {
        return true;
      }
    }
  
    return false;
  };
  