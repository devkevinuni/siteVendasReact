from django.db import models

class Product(models.Model):
    # O 'id' o Django cria automaticamente como chave primária
    nome = models.CharField(max_length=255)
    descricao = models.TextField()
    categoria = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    estoque = models.IntegerField(default=0)
    imagem_url = models.CharField(max_length=500) # Usando CharField para aceitar o caminho da imagem ou URL
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome