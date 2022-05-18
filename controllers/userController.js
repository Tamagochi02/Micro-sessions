import { prisma } from "../../lib/prisma";

export const get = async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
}

export const post = async (req, res) => {
  const {
      id, type
  } = req.body
  const usser = await prisma.user.create({
      data: {
          id, type
      }
  })
  res.json(usser)
}

export const put = async(req, res) => {
  const {
     id, type
  } = req.body
  const usser = await prisma.user.update({
      data: {
          type
      },
      where: {
          id
      }
  })
  res.json(usser)
}
