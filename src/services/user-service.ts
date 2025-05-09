import { prisma } from "config/client";
import getConnection from "config/database";
import e from "express";

const handleCreateUser = async (
    fullName: string,
    email: string,
    address: string) => {

    const newUser = await prisma.user.create({
        data: {
            name: fullName,
            email: email,
            address: address,
        },
    })
}

const getAllUser = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const handleDeleteUser = async (id: string) => {
    const result = await prisma.user.delete({
        where: {
            id: +id
        }
    })
    return result;
}

const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: +id,
        },
    })
    return user;
}

const handleUpdateUser = async (
    id: string,
    fullName: string,
    email: string,
    address: string
) => {
    const updatedUser = await prisma.user.update({
        where: {
            id: +id,
        },
        data: {
            name: fullName,
            email: email,
            address: address
        }
    })
    return updatedUser;
}
export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, handleUpdateUser };