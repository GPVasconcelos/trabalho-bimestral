import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente} from './entities/cliente.entity';
import { PrismaService } from 'prisma/prisma.service';
import { cliente } from '@prisma/client';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService){};

  private mapToEntity(cliente: any): Cliente {
    return{
      id: cliente.id,
      nome: cliente.nome,
      endereco: cliente.endereco,
      cnpj: cliente.cnpj,
      telefone: cliente.telefone,
      email: cliente.email,
    }
  }

  async create(
    createClienteDto: CreateClienteDto
  ): Promise<Cliente> {
    const cliente = await this.prisma.cliente.create({
      data: {
        nome: createClienteDto.nome,
        endereco: createClienteDto.endereco,
        cnpj: createClienteDto.cnpj,
        telefone: createClienteDto.telefone,
        email: createClienteDto.email,
      },
    });
    return this.mapToEntity(cliente);
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const clienteExistente = await this.prisma.cliente.findUnique({ where: { id } });
    if (!clienteExistente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }

    const cliente = await this.prisma.cliente.update({
      where: { id },
      data: {
        nome: updateClienteDto.nome,
        endereco: updateClienteDto.endereco,
        cnpj: updateClienteDto.cnpj,
        telefone: updateClienteDto.telefone,
        email: updateClienteDto.email,
      }
    }); 
    
    return this.mapToEntity(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    const cliente = await this.prisma.cliente.findMany();
    return cliente.map(
      cliente => this.mapToEntity (cliente)
    );
  }


  async findOne(id: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: { id },
    });

    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }

    return cliente;
  }
 

  async remove(id: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: { id },
    });
  
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }
  
    return this.prisma.cliente.delete({
      where: { id },
    });
  }
}
