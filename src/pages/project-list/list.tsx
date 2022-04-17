import type { ProjectListProps, User } from "./dirc";
export const ProjectList = ({ list, users }: ProjectListProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {list?.map((project) => (
                    <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>
                            {
                                (
                                    users.find(
                                        (user) => user.id === project.personId
                                    ) as User
                                )?.name
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
