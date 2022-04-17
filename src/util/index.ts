// 清除对象中为空的值
export const cleanObject = (obj: any) => {
    const result = { ...obj };
    Object.keys(result).forEach((key) => {
        if (!result[key]) {
            delete result[key];
        }
    });
    return result;
};
