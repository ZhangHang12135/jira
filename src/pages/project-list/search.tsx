import type { SearchProps } from "./dirc";

export const Search = ({ params, users, setPrams }: SearchProps) => {
    return (
        <form action="">
            <div>
                <input
                    type="text"
                    name="name"
                    value={params.name}
                    onChange={(e) =>
                        setPrams({ ...params, name: e.target.value })
                    }
                />
                <select
                    value={params.personId}
                    onChange={(e) =>
                        setPrams({ ...params, personId: +e.target.value })
                    }
                >
                    <option value={0}>负责人</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
};
