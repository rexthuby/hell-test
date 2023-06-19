import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.save(createProductDto);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const category = await this.productRepository.findOneBy({ id: id });

    if (!category) {
      throw new BadRequestException('Product not found');
    }

    return category;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productToUpdate = await this.productRepository.findOneBy({ id: id });

    if (!productToUpdate) {
      throw new BadRequestException('Product not found');
    }

    return this.productRepository.update(id, updateProductDto);
  }

  async remove(id: number) {
    const productToDelete = await this.productRepository.findOneBy({ id: id });

    if (!productToDelete) {
      throw new BadRequestException('Product not found');
    }

    return this.productRepository.delete(id);
  }
}
