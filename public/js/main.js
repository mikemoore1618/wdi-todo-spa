const 
    apiClient = axios.create(),
    $list = $('#list'),
    $addTodo = $('#form button'),
    $body = $('#body')


apiClient({ method: 'get', url: '/api/todos' }).then((apiResponse) => {
    //after receiving data loop through it and append an <li>
    const todos = apiResponse.data
    todos.forEach((t) => {
        $list.append(`
                <li id="${t._id}">
                    <span class="toggle">
                        ${t.body}
                    </span>
                    <button class="delete">✕</button>
                </li>
            `)
        })
    });

$addTodo.on('click', function() {
    const formData = {
        body: $body.val()
    }
    apiClient({ method: 'post', url: 'api/todos', data: formData }).then(
        (apiResponse) => {
            const todo = apiResponse.data.todo;
            console.log(todo)
                $list.append(`
                    <li id="${todo._id}">
                    <span class="toggle">
                        ${todo.body}
                    </span>
                    <button class="delete">✕</button>
                `)
        }
    )
});


$list.on('click', '.toggle', function() {
    const formData = {
        body: $body.val()
    }
    // const todoId = $(this).parent().attr('id');
    apiClient({ method: 'patch', url: `/api/todos/`, data: formData }).then((apiResponse) => {
        let todo = apiResponse.data.todo
            console.log(todo)
            $list.append(`
            <li id="${todo._id}">
                ${todo.body} //
                Completed: ${todo.completed} //
                <button class="delete">X</button>
            </li>
            `)
            todo.body.strike('')
        }
    )
});

$list.on('click', '.delete', function() {
    const todoId = $(this).parent().attr('id')
    apiClient({ method: 'delete', url: `/api/todos/${todoId}` }).then(
        (apiResponse) => {
            console.log(apiResponse)
            $(this).parent().remove()
        }
    )
});