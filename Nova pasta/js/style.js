// Aguarda até que todo o conteúdo do documento HTML esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Faz uma requisição GET para a API para obter 5 usuários aleatórios
    fetch('https://randomuser.me/api/?results=5')
        .then(response => {
            // Converte a resposta da API para JSON
            return response.json();
        })
        .then(data => {
            // Loga a resposta para verificar a estrutura dos dados
            console.log(data);

            // Obtém a lista de usuários do campo 'results' da resposta JSON
            const users = data.results;

            // Seleciona o corpo da tabela onde as linhas serão adicionadas
            const tableBody = document.getElementById('user-table').getElementsByTagName('tbody')[0];

            // Itera sobre cada usuário na lista de usuários
            users.forEach(user => {
                // Constrói o nome completo do usuário
                const name = `${user.name.first} ${user.name.last}`;
                // Obtém o gênero do usuário
                const gender = user.gender;
                // Obtém o email do usuário
                const email = user.email;
                // Obtém o telefone do usuário
                const phone = user.phone;
                // Constrói o endereço completo do usuário
                const address = `${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;

                // Cria um novo elemento de linha de tabela
                const row = document.createElement('tr');

                // Define o conteúdo HTML da linha com os dados do usuário
                row.innerHTML = `
                    <td>${name}</td>
                    <td>${gender}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${address}</td>
                `;
                
                // Adiciona a linha preenchida ao corpo da tabela
                tableBody.appendChild(row);
            });
        })
        // Captura e loga qualquer erro que ocorra durante o processo de requisição
        .catch(error => {
            console.error('Error:', error);
        });
});
