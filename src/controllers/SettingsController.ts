import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import SettingsRepository from "../repositories/SettingsRepository";

export default class SettingsController {
  async create(req: Request, res: Response) {
    const settingsRepository = getCustomRepository(SettingsRepository);
  const { chat, username } = req.body;

  const settings = settingsRepository.create({
    chat,
    username
  });

  await settingsRepository.save(settings);

  return res.json(settings);
  }
};