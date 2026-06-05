const { useState, useEffect } = React;

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const STORAGE_KEY = 'todoList';

    useEffect(() => {
        const savedTodos = localStorage.getItem(STORAGE_KEY);
        if (savedTodos) {
            try {
                setTodos(JSON.parse(savedTodos));
            } catch (error) {
                console.error('Error loading todos:', error);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (inputValue.trim() === '') {
            alert('Masukkan tugas terlebih dahulu!');
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
            createdAt: new Date().toLocaleString('id-ID')
        };

        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
            setTodos(todos.filter(todo => todo.id !== id));
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;
    const activeTodos = totalTodos - completedTodos;

    return (
        <div className="todo-container">
            <h1>📝 My Todo List</h1>
            <p className="subtitle">Kelola tugas Anda dengan efisien</p>

            {/* Input Section */}
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Tambahkan tugas baru..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={addTodo}>Tambah</button>
            </div>

            {/* Todo List */}
            {todos.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-state-icon">✨</div>
                    <p className="empty-state-text">Belum ada tugas. Mulai dengan menambahkan tugas baru!</p>
                </div>
            ) : (
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <span className="todo-text">{todo.text}</span>
                            <button
                                className="delete-btn"
                                onClick={() => deleteTodo(todo.id)}
                            >
                                Hapus
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {/* Statistics */}
            {todos.length > 0 && (
                <div className="stats">
                    <div className="stat">
                        <div className="stat-number">{totalTodos}</div>
                        <div className="stat-label">Total</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number">{activeTodos}</div>
                        <div className="stat-label">Aktif</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number">{completedTodos}</div>
                        <div className="stat-label">Selesai</div>
                    </div>
                </div>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoApp />);
