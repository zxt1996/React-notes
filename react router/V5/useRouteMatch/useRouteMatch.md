```
// > V5.1
import { useRouteMatch } from "react-router";

function App() {
    let match = useRouteMatch({
        path: "/Movies/:id/",
        strict: true,
        sensitive: true
    });

    return (
        <div>
            <!-- Movies组件只会在匹配`/Movies/:id/`时出现 -->
            {match && <Movies match={match} />}
        </div>
    );
}
```