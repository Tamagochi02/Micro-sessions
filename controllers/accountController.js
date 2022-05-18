import { prisma } from "../lib/prisma.js";

export const get = async (req, res) => {
  const accounts = await prisma.account.findMany()
  res.json(accounts)
}

export const post = async (req, res) => {
  const {
    pass, email, phone, name
  } = req.body
  const account = await prisma.account.create({
    data: {
      pass
    }
  })
  const usser = await prisma.user.create({
    data: {
      id: account.id
    }
  })
  res.json(usser)
}

export const put = async (req, res) => {
  const {
    id, pass
  } = req.body
  const account = await prisma.account.update({
    data: {
      pass
    },
    where: {
      id
    }
  })
  res.json(account)
}
