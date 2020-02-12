```
// > V5.1
import { useHistory } from "react-router-dom";

export const Profile = () => {
    let history = useHistory();
    return (
        <div>
            <button onClick={() => history.goBack()}>Back</button>
            <button onClick={() => history.push("/")}>Home</button>
            <section>
                <p>profile page</p>
            </section>
        </div>
    );
};

```