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
                    <span class="toggle ${t.completed ? 'completed' : ''}">
                        ${t.body}
                    </span>
                    <button class="delete">✕</button>
                </li>
            `)
        })
    });

$addTodo.on('click', function(evt) {
    evt.preventDefault()
    const formData = {
        body: $body.val()
    }
    apiClient({ method: 'post', url: 'api/todos', data: formData }).then(
        (apiResponse) => {
            const todo = apiResponse.data.todo;
            console.log(todo)
                $list.append(`
                    <li id="${todo._id}">
                    <span class="toggle ${todo.completed ? 'completed' : ''}">
                        ${todo.body}
                    </span>
                    <button class="delete">✕</button>
                    </li>
                `)
                $body.val('')
                $body.focus()
        }
    )
});


$list.on('click', '.toggle', function() {
    const formData = {
        body: $body.val()
    }
    const todoId = $(this).parent().attr('id');
    apiClient({ method: 'patch', url: `/api/todos/${todoId}`}).then((apiResponse) => {
        if(apiResponse.data.todo.completed) {
            // add the completed class to the span
            $(this).addClass('completed')
        } else {
            // remove it
            $(this).removeClass('completed')
        }
    })
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