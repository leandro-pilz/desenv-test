import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { PostEntity } from "../entities/PostEntity";

async function getAllPostByUser(req: Request, res: Response) {
  const { userId } = req.params;

  const prisma = new PrismaClient();

  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      topico: true,
      criadoEm: true,
      atualizadoEm: true,
    },
    where: {
      autorId: parseInt(userId),
    },
  });

  await prisma.$disconnect();
  res.status(200).json(todos);
}

async function createPost(req: Request, res: Response) {
  const { topico, usuarioId } = req.body;

  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(usuarioId),
      },
    });

    if (!user) {
      await prisma.$disconnect();
      res.status(404).json({ errors: ["Usuário não está cadastrado."] });
      return;
    }

    const date = new Date();
    const todo = await prisma.todo.create({
      data: {
        topico,
        criadoEm: date,
        atualizadoEm: date,
        autorId: user.id,
      },
    });

    await prisma.$disconnect();
    res.status(201).json(todo);
  } catch (error) {
    await prisma.$disconnect();
    res
      .status(500)
      .json({ errors: ["Ops, serviço indisponível tente mais tarde."] });
  }
}

async function updatePost(req: Request, res: Response) {
  const { id } = req.params;
  const { topico } = req.body;

  const prisma = new PrismaClient();

  try {
    const post = await prisma.todo.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!post) {
      await prisma.$disconnect();
      res.status(404).json({ errors: ["Lisat não está cadastrada."] });
      return;
    }

    const postUpdate = await prisma.todo.update({
      where: {
        id: post.id,
      },
      data: {
        topico,
      },
    });

    await prisma.$disconnect();
    res.status(200).json(postUpdate);
  } catch (error) {
    await prisma.$disconnect();
    res
      .status(500)
      .json({ errors: ["Ops, serviço indisponível tente mais tarde."] });
  }
}

export { getAllPostByUser, createPost, updatePost };
