import { useEffect, useState } from "react";
import { Search } from "./search";
import { ProjectList } from "./list";
import type { User, Params, Project } from "./dirc";
import { cleanObject } from "../../util";
import qs from "qs";
import useMount from "hooks/useMount";
import { useDebounce } from "hooks/useDebounce";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
    const [params, setParams] = useState<Params>({
        name: "",
        personId: 0,
    });
    const debounceParams = useDebounce(params, 500);
    const [users, setUsers] = useState<User[]>([]);

    const [list, setList] = useState<Project[]>([]);
    useMount(() => {
        fetch(apiUrl + "/users")
            .then((res) => res.json())
            .then(setUsers);
    });
    useEffect(() => {
        fetch(`${apiUrl}/list?${qs.stringify(cleanObject(debounceParams))}`)
            .then((res) => res.json())
            .then(setList);
    }, [debounceParams]);
    return (
        <div>
            <Search params={params} users={users} setPrams={setParams} />
            <ProjectList list={list} users={users}></ProjectList>
        </div>
    );
};
