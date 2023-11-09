import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../entities/UserEntity";

async function getUsers(req: Request, res: Response) {
  const { nome, email } = req.body;

  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    await prisma.$disconnect();
    res.status(404).json({ errors: ["Usuário não está cadastrado."] });
    return;
  }

  await prisma.$disconnect();
  res.status(200).json(user);
}

async function createUsers(req: Request, res: Response) {
  const { nome, email } = req.body;

  const prisma = new PrismaClient();

  try {
    const userEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userEmail) {
      await prisma.$disconnect();
      res.status(409).json({ errors: ["Usuário já está cadastrado."] });
      return;
    }

    const user = await prisma.user.create({
      data: {
        nome,
        email,
        criadoEm: new Date(),
      },
    });

    await prisma.$disconnect();
    res.status(201).json(user);
  } catch (error) {
    await prisma.$disconnect();
    res
      .status(500)
      .json({ errors: ["Ops, serviço indisponível tente mais tarde."] });
  }
}

async function updateUsers(req: Request, res: Response) {
  const { id } = req.params;
  const { nome } = req.body;

  const prisma = new PrismaClient();

  let userUpdate: UserEntity;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!user) {
      await prisma.$disconnect();
      res
        .status(404)
        .json({ errors: ["Usuário informado não está cadastrado."] });
      return;
    }

    userUpdate = await prisma.user.update({
      where: {
        id: user?.id,
      },
      data: {
        nome,
      },
    });

    await prisma.$disconnect();
    res.status(200).json(userUpdate);
  } catch (error) {
    await prisma.$disconnect();
    res
      .status(500)
      .json({ errors: ["Ops, serviço indisponível tente mais tarde."] });
  }
}

export { getUsers, createUsers, updateUsers };
