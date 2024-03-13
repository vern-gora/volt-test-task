import Layout from './Layout/Layout.jsx';
import AppBar from './AppBar/AppBar.jsx';
import TaskForm from './TaskForm/TaskForm.jsx';
import TaskList from './TaskList/TaskList.jsx';

const App = () => {
    return (
        <>
            <AppBar />
            <Layout>
                <TaskForm />
                <TaskList />
            </Layout>
        </>
    );
};

export default App;
