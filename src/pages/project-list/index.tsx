import { useEffect, useState } from "react";
import { Search } from "./search";
import { ProjectList } from "./list";
import type { User, Params, Project } from "./dirc";
import { cleanObject } from "../../util";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
    const [params, setParams] = useState<Params>({
        name: "",
        personId: 0,
    });
    const [users, setUsers] = useState<User[]>([]);

    const [list, setList] = useState<Project[]>([]);
    useEffect(() => {
        fetch(apiUrl + "/users")
            .then((res) => res.json())
            .then(setUsers);
    }, []);
    useEffect(() => {
        fetch(`${apiUrl}/list?${qs.stringify(cleanObject(params))}`)
            .then((res) => res.json())
            .then(setList);
    }, [params]);
    return (
        <div>
            <Search params={params} users={users} setPrams={setParams} />
            <ProjectList list={list} users={users}></ProjectList>
        </div>
    );
};
